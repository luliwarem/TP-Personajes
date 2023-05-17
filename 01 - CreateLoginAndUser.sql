USE [master]
GO
CREATE LOGIN [Personajes] WITH PASSWORD=N'Personajes', DEFAULT_DATABASE=[TP-Personajes], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [TP-Personajes]
GO
CREATE USER [Personajes] FOR LOGIN [Personajes]
GO
USE [TP-Personajes]
GO
ALTER ROLE [db_owner] ADD MEMBER [Personajes]
GO
