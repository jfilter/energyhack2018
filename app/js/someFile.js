// import d3 from 'd3';

const times = [
  '3:00',
  '6:00',
  '9:00',
  '12:00',
  '15:00',
  '18:00',
  '21:00',
  // '0:00',
];

function someFunction(step) {
  var width = 960,
    height = 600,
    barHeight = 500 / 2 - 40;

  var formatNumber = d3.format('s');

  var color = d3.scale
    .linear()
    .domain([0, 0.75, 1.5])
    .interpolate(d3.interpolateHcl)
    .range([d3.rgb('#ccebc5'), d3.rgb('#b3cde3'), d3.rgb('#fbb4ae')]);

  d3.select('svg').remove();

  var svg = d3
    .select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  d3.csv('data/' + step + '.csv', function(error, data) {
    // data.sort(function(a, b) {
    //   return b.value - a.value;
    // });

    // const maxValue = d3.max(data.map(x => x.value));
    // console.log(maxValue);

    data.forEach(x => (x.value = x.value / 2000));

    // cosno

    console.log(data);

    var extent = d3.extent(data, function(d) {
      return d.value;
    });
    var barScale = d3.scale
      .linear()
      // .domain(extent)
      .domain([0, 1])
      .range([0, barHeight]);

    var keys = data.map(function(d, i) {
      return d.time;
    });
    var numBars = keys.length;

    var x = d3.scale
      .linear()
      .domain([0, 2000])
      .range([0, -barHeight]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient('left')
      .ticks(3)
      .tickFormat(formatNumber);

    // var circles = svg
    //   .selectAll('circle')
    //   .data(x.ticks(3))
    //   .enter()
    //   .append('circle')
    //   .attr('r', function(d) {
    //     return barScale(d);
    //   })
    //   .style('fill', 'none')
    //   .style('stroke', 'black')
    //   .style('stroke-dasharray', '2,2')
    //   .style('stroke-width', '.5px');

    var arc = d3.svg
      .arc()
      .startAngle(function(d, i) {
        return (i * 2 * Math.PI) / numBars;
      })
      .endAngle(function(d, i) {
        return ((i + 1) * 2 * Math.PI) / numBars;
      })
      .innerRadius(0);

    var segments = svg
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .each(function(d) {
        d.outerRadius = 0;
      })
      .style('fill', function(d) {
        return color(d.value);
      })
      .attr('d', arc);

    segments
      .transition()
      .ease('elastic')
      .duration(1000)
      .delay(function(d, i) {
        return i * 100;
      })
      .attrTween('d', function(d, index) {
        var i = d3.interpolate(d.outerRadius, barScale(+d.value));
        return function(t) {
          d.outerRadius = i(t);
          return arc(d, index);
        };
      });

    svg
      .append('circle')
      .attr('r', barHeight)
      .classed('outer', true)
      .style('fill', 'none')
      .style('stroke', 'lightgrey')
      .style('stroke-width', '1px');

    var lines = svg
      .selectAll('line')
      .data(keys)
      .enter()
      .append('line')
      .attr('y2', -barHeight - 0)
      .style('stroke', 'lightgrey')
      .style('stroke-width', '.5px')
      .attr('transform', function(d, i) {
        if (times.includes(d)) return 'rotate(' + (i * 360) / numBars + ')';
        return '';
      });

    svg
      .append('g')
      .attr('class', 'x axis')
      .call(xAxis);

    // Labels
    var labelRadius = barHeight * 1.025;

    var labels = svg.append('g').classed('labels', true);

    labels
      .append('def')
      .append('path')
      .attr('id', 'label-path')
      .attr(
        'd',
        'm0 ' +
          -labelRadius +
          ' a' +
          labelRadius +
          ' ' +
          labelRadius +
          ' 0 1,1 -0.01 0'
      );

    labels
      .selectAll('text')
      .data(keys)
      .enter()
      .append('text')
      .style('text-anchor', 'middle')
      .style('font-weight', 'bold')
      .style('fill', function(d, i) {
        return '#3e3e3e';
      })
      .append('textPath')
      .attr('xlink:href', '#label-path')
      .attr('startOffset', function(d, i) {
        return (i * 100) / numBars + 50 / numBars + '%';
      })
      .text(function(d) {
        if (times.includes(d)) {
          return d.toUpperCase();
        }
        return '';
      });
  });
}

export default someFunction;
