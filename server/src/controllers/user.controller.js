const { User } = require('../database');

const getAll = async (req, res) => {
  try {
    const users = await User.findAll({
      order: [['createdAt', 'desc']],
      attributes: ['id', 'firstName', 'lastName', 'age', 'email','password', 'createdAt'],
    });
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
};

const addOne = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    const newUser = await User.findOne({
      where: { id: user.id }
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
  }
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const userToUpdate = await User.findOne({ where: { id } });
    if (!userToUpdate) return res.status(404).json({ error: 'user not found' });
    await userToUpdate.update(req.body);
    console.log(req.body)
    return res.status(200).json(userToUpdate);
  } catch (error) {
    console.error(error);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const userToDelete = await User.findOne({ where: { id } });
    if (!userToDelete) return res.status(404).json({ error: 'user not found' });
    await userToDelete.destroy();
    return res.status(204).json(userToDelete);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addOne,
  deleteOne,
  getAll,
  updateOne,
};
