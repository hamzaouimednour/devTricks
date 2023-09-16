
```php
# check date format
function check_date_format($date, $format = 'Y-m-d H:i:s')
{
    $d = DateTime::createFromFormat($format, $date);
    return $d && $d->format($format) === $date;
}

# string to array
str_split($string);
str_split($string, 2);
// using delimiter
explode(' ', $string);

# array to string
implode(', ', $array);
```
