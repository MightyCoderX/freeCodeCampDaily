/*
Array Chunks

Given an array and a chunk size, return the array split into
sub-arrays of that size.

- The last chunk may be smaller if the array doesn't divide evenly.

*/


function chunkArray(arr, size) {
    const chunks = [];

    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
    }

    return chunks;
}
