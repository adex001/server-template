const userController = (req, res) =>
  // eslint-disable-next-line no-console
  // eslint-disable-next-line implicit-arrow-linebreak
  res.status(200).json({
    message: 'User Controller',
  });

export default userController;
