create database if not exists heroclash4geeks;
use heroclash4geeks;
create user if not exists dsw@'%' identified by 'dsw';
grant all on heroclash4geeks.* to dsw@'%';

