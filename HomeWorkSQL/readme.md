1 уровень сложности: 1.Вывести зарплату сотрудника с именем ‘Lex’ и фамилией ‘De Haan'
2.Вывести всех сотрудников с jobid ‘FIACCOUNT’ и зарабатывающих меньше 8000
3.Вывести сотрудников, у которых в фамилии в середине слова встречаются сочетания ‘kk’ или ‘ll’
4.Вывести всех сотрудников кроме тех, кто работает в департаментах 80 и 110






select salary
from employees
where first_name = 'Lex' or last_name = 'De Haan';

select *
from employees
where job_id = 'FI_ACCOUNT'and salary < 8000;

select *
from employees
where last_name like '%_kk_%' or last_name like '%_ll_%';

select *
from employees
where department_id <> 80 or department_id <> 110; 
