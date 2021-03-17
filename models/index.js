const User = require('./User');
const Post = require('./Post');

// define relationships
// User can make many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Post has one user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post };
