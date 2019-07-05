import User from '../models/User';

class UserContoller {
    async store(req, res) {
        const userExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExists) {
            return res.status(400).json({ error: 'User already exists.' });
        }
        const user = await User.create(req.body);

        return res.json(user);
    }

    async getAll(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }
}

export default new UserContoller();
