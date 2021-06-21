const propsSelector = ({
  app: { globalScore, lastGame1Score, lastGame2Score, lastGame3Score },
}) => ({
  globalScore,
  lastGame1Score,
  lastGame2Score,
  lastGame3Score,
});

export default { propsSelector };
