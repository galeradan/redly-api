'use strict';
const path = require('path');
module.exports = {
    useUnifiedTopology: true,
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test',
    entities: [
        path.join(__dirname, 'src', 'entity', '*.ts')
    ]
};
//# sourceMappingURL=ormconfig.js.map