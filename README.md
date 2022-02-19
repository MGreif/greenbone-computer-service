# greenbone-computer-service
Programming Exercise for Greenbone Application

# Datamodel

- macAddr
- name
- ip
- employeeAbbreviation
- description (optional)

# REST-Interfaces for Requirements


## The system administrator wants to be able to add a new computer to an employee (CREATE)
Http-Method: `POST`

URL-Path: `http://localhost:8000/computer`


Body:
```JSON
{
  "macAddr": "::1",
  "name": "Computer 1",
  "ip": "10.0.0.1",
  "employeeAbbreviation": "mmu",
  "description": "HR",
}
```

## The system administrator wants to be informed when an employee is assigned 3 or more computers.

Http-Method: `POST`

URL-Path: `http://localhost:8080/api/notify`


Body:
```JSON
{
  "level": "warning",
  "employeeAbbreviation": "mmu",
  "message": "some message"
}
```

## The system administrator wants to be able to get all assigned computers for an employee (READ)

Http-Method: `GET`

URL-Path: `http://localhost:8000/computer`

Example: `http://localhost:8000/computer?employeeAbbreviation=mmu`

## The system administrator wants to be able to remove a computer from an employee (DELETE)

Http-Method: `DELETE`

URL-Path: `http://localhost:8000/computer/:id`


## The system administrator wants to be able to assign a computer to another employee (UPDATE)

Http-Method: `PATCH`

URL-Path: `http://localhost:8000/computer/:id`


Body:
```JSON
{
  "employeeAbbreviation": "new",
}
```
