function findNeighbors(node, matrix) {
    // Up

    // Down

    // Left

    // Right

    // Your code here
    const results = []
    const nodeRow = node[0]
    const nodeCol = node[1]

    // checking the node above
    if(matrix[nodeRow - 1] && matrix[nodeRow - 1][nodeCol]){
        results.push([nodeRow - 1, nodeCol])
    }

    // checking the node below
    if(matrix[nodeRow + 1] && matrix[nodeRow + 1][nodeCol]){
        results.push([nodeRow + 1, nodeCol])
    }

    // checking the node to the left
    if(matrix[nodeCol - 1] && matrix[nodeRow][nodeCol - 1]){
        results.push([nodeRow, nodeCol - 1])
    }

    // checking the node to the right
    if(matrix[nodeCol + 1] && matrix[nodeRow][nodeCol + 1]){
        results.push([nodeRow, nodeCol + 1])
    }

    return results
}


function bfsPath(matrix, startNode, endValue) {
    // Your code here
    const queue = [startNode]
    const visited = new Set()
    visited.add(`${startNode}`)
    const arr = [startNode]

    const startRow = startNode[0]
    const startCol = startNode[1]

    while(queue.length){
        let currentNode = queue.shift()
        let [r, c] = currentNode
        // let currentNode = currentPath[currentPath.length - 1]
        if(matrix[r][c] === endValue){
            return arr
        }

        // if(currentNode === endValue) return currentPath

        let currentNeighbors = findNeighbors(currentNode, matrix)

        for(let i = 0; i < currentNeighbors.length; i++){
            // let counter = 0
            let neighbor = currentNeighbors[i]
            if(!visited.has(`${neighbor}`)){
                queue.push(neighbor)
                visited.add(`${neighbor}`)
                arr.push(neighbor)
            }

            // if(i === currentNeighbors.length - 1 && counter === 0){
            //     return false
            // }
        }
    }

    return false
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
