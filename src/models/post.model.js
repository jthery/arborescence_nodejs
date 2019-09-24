module.exports = (sequelizeModels, Sequelize) => {
    const posts = sequelizeModels.define(
        'posts', {
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
            },
            title: {
                type: Sequelize.STRING(255)
            },
            content: {
                type: Sequelize.STRING(255)
            },
            creation_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            edit_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
        }, {
            timestamps: false,
            freezeTableName: true,
        }
    );

    return posts;
};