var minPathSum = function (grid) {
  let x = grid.length - 1;
  let y = grid[0].length - 1;
  return calc(grid, x, y);
};

var calc = function (grid, i, j) {
  if (i == 0 && j == 0) return grid[0][0];
  if (i == 0) return grid[i][j] + calc(grid, 0, j - 1);
  if (j == 0) return grid[i][j] + calc(grid, i - 1, 0);
  return grid[i][j] + Math.min(calc(grid, i - 1, j), calc(grid, i, j - 1));
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
