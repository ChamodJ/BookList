# Database Configuration Guide

This document provides instructions for setting up and configuring the database connection for the application.

## Prerequisites

- SQL Server installed and running
- Visual Studio with Entity Framework Core tools
- .NET SDK installed

## Database Configuration

### Connection String Setup

1. Locate the `ApplicationDBContext` class and appsettings.json in your project
2. Update the connection string in the `OnConfiguring` method to match your environment:

```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    optionsBuilder.UseSqlServer("Data Source=YourServerName;Initial Catalog=YourDatabaseName;Integrated Security=True;Encrypt=False");
}
```

Replace the following parameters in the connection string:
- `YourServerName`: The name of your SQL Server instance
- `YourDatabaseName`: The name of your database

## Database Migration

### Using Package Manager Console

To set up the database schema, follow these steps in the Package Manager Console:

1. Add the initial migration:
```powershell
Add-Migration InitialCreate
```

2. Apply the migration to create/update the database:
```powershell
Update-Database
```

### Common Migration Commands

- List all migrations:
```powershell
Get-Migration
```

- Remove last migration:
```powershell
Remove-Migration
```

- Generate SQL script:
```powershell
Script-Migration
```

