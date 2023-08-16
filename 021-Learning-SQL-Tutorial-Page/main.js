new Vue({
  el: '#app',
  data: {
    sqlCommands: [
      {
        name: 'SELECT',
        description: 'Veritabanından veri seçmek için kullanılır.',
        example: 'SELECT * FROM employees WHERE department = \'IT\';'
      },
      {
        name: 'INSERT',
        description: 'Veritabanına yeni veri eklemek için kullanılır.',
        example: 'INSERT INTO customers (name, email) VALUES (\'John Doe\', \'john@example.com\');'
      },
      {
        name: 'UPDATE',
        description: 'Varolan verileri güncellemek için kullanılır.',
        example: 'UPDATE products SET price = 15.99 WHERE category = \'Electronics\';'
      },
      {
        name: 'DELETE',
        description: 'Veritabanından veri silmek için kullanılır.',
        example: 'DELETE FROM orders WHERE status = \'cancelled\';'
      },
      {
        name: 'CREATE TABLE',
        description: 'Yeni bir tablo oluşturmak için kullanılır.',
        example: 'CREATE TABLE customers (id INT PRIMARY KEY, name VARCHAR(50), email VARCHAR(100));'
      },
      {
        name: 'ALTER TABLE',
        description: 'Varolan bir tabloyu değiştirmek için kullanılır.',
        example: 'ALTER TABLE orders ADD COLUMN order_date DATE;'
      },
      {
        name: 'DROP TABLE',
        description: 'Varolan bir tabloyu silmek için kullanılır.',
        example: 'DROP TABLE products;'
      },
      {
        name: 'JOIN',
        description: 'İki veya daha fazla tabloyu ilişkilendirmek için kullanılır.',
        example: 'SELECT customers.name, orders.order_date FROM customers INNER JOIN orders ON customers.id = orders.customer_id;'
      },
      {
        name: 'GROUP BY',
        description: 'Belirli bir sütuna göre verileri gruplamak için kullanılır.',
        example: 'SELECT department, COUNT(*) FROM employees GROUP BY department;'
      },
      {
        name: 'ORDER BY',
        description: 'Sonuçları belirli bir sütuna göre sıralamak için kullanılır.',
        example: 'SELECT name, price FROM products ORDER BY price DESC;'
      },
      {
        name: 'DISTINCT',
        description: 'Tekrar eden değerleri filtrelemek için kullanılır.',
        example: 'SELECT DISTINCT category FROM products;',
      },
      {
        name: 'COUNT',
        description: 'Belirli bir sütundaki verilerin sayısını hesaplamak için kullanılır.',
        example: 'SELECT COUNT(*) FROM orders;',
      },
      {
        name: 'SUM',
        description: 'Belirli bir sütundaki sayısal değerlerin toplamını hesaplamak için kullanılır.',
        example: 'SELECT SUM(price) FROM products;',
      },
      {
        name: 'AVG',
        description: 'Belirli bir sütundaki sayısal değerlerin ortalamasını hesaplamak için kullanılır.',
        example: 'SELECT AVG(age) FROM employees;',
      },
      {
        name: 'MIN',
        description: 'Belirli bir sütundaki en küçük değeri bulmak için kullanılır.',
        example: 'SELECT MIN(price) FROM products;',
      },
      {
        name: 'MAX',
        description: 'Belirli bir sütundaki en büyük değeri bulmak için kullanılır.',
        example: 'SELECT MAX(age) FROM employees;',
      },
      {
        name: 'WHERE',
        description: 'Belirli bir koşulu sağlayan verileri filtrelemek için kullanılır.',
        example: 'SELECT * FROM customers WHERE city = \'New York\';',
      },
      {
        name:'LIKE',
        description: 'Belirli bir deseni içeren verileri bulmak için kullanılır.',
        example: 'SELECT * FROM products WHERE name LIKE \'%phone%\';',
      },
      {
        name: 'BETWEEN',
        description: 'Belirli bir aralıktaki verileri seçmek için kullanılır.',
        example: 'SELECT * FROM orders WHERE order_date BETWEEN \'2023-01-01\' AND \'2023-06-30\';',
      },
      {
        name: 'LIMIT',
        description: 'Sonuç kümesini belirli bir sayıda kayıtla sınırlamak için kullanılır.',
        example: 'SELECT * FROM products LIMIT 10'
      }
    ],
    selectedCommand: null
  },
  methods: {
    showDetails(index) {
      this.selectedCommand = this.sqlCommands[index];
    }
  }
});
