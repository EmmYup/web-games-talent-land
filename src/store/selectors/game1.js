const propsSelector = ({
  app: { game1Score, globalScore, localGame1Score },
}) => ({
  game1Score,
  globalScore,
  localGame1Score,
});

export default { propsSelector };
