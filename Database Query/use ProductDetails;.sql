use ProductDetails;
create table product(
    id int auto_increment primary key,
    name varchar(255) not null,
    description text,
    price decimal(10,2) not null,
    quantity int not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);