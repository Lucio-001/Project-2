const viewQuotesByAuthor = ( ) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'author_name',
            message: 'Please enter name of the author you want to see the quotes!',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter valid name!');
                    return false;
                }
            }
        }]).then(answer => {
            const sql = `SELECT department.id AS id, department.department_name AS depart FROM quotesDB;`;
            connection.query(sql, (error, rows) => {
                if (error) throw error;
                console.table(rows);
                return;    
            })
        })
    
};