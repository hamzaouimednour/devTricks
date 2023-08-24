# SQL row size errors
```sql
SET GLOBAL innodb_default_row_format='dynamic';
SET SESSION innodb_strict_mode = 0;
SET SESSION FOREIGN_KEY_CHECKS = 0;

DROP TABLE `table_name`;
CREATE TABLE `table_name` (...);
```
