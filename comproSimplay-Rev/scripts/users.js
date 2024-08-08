document.addEventListener('DOMContentLoaded', () => {
    const svg = document.getElementById('network-svg');
    
    // Coordinates for the nodes (match these with the CSS positions)
    const nodes = [
        {x: '20%', y: '10%'},
        {x: '50%', y: '20%'},
        {x: '30%', y: '30%'},
        {x: '70%', y: '40%'},
        {x: '40%', y: '50%'},
        {x: '60%', y: '60%'},
        {x: '20%', y: '70%'},
        {x: '50%', y: '80%'},
        {x: '80%', y: '30%'},
        {x: '10%', y: '40%'},
        {x: '90%', y: '50%'}
    ];

    // Draw lines between selected nodes for a cleaner look
    const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4], 
        [4, 5], [5, 6], [6, 7], [7, 8], 
        [8, 9], [9, 10], [10, 0]
    ];

    connections.forEach(pair => {
        drawLine(svg, nodes[pair[0]], nodes[pair[1]]);
    });

    function drawLine(svg, node1, node2) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', node1.x);
        line.setAttribute('y1', node1.y);
        line.setAttribute('x2', node2.x);
        line.setAttribute('y2', node2.y);
        line.setAttribute('stroke', 'white');
        line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
    }

    // Apply parallax effect only to the network section
    document.addEventListener('mousemove', (e) => {
        const network = document.querySelector('.network');
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;
        network.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});
