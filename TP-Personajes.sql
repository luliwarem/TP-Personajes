USE [TP-Personajes]
GO
/****** Object:  Table [dbo].[PeliculaSerie]    Script Date: 3/5/2023 08:41:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliculaSerie](
	[IdPeli] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](max) NOT NULL,
	[Titulo] [varchar](50) NOT NULL,
	[FechaDeCreacion] [date] NOT NULL,
	[Calificacion] [float] NOT NULL,
 CONSTRAINT [PK_Pelicula o Serie] PRIMARY KEY CLUSTERED 
(
	[IdPeli] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PeliPersonaje]    Script Date: 3/5/2023 08:41:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliPersonaje](
	[IdPeli] [int] NOT NULL,
	[IdPersonaje] [int] NOT NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_PeliPersonaje] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 3/5/2023 08:41:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[IdPersonaje] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](max) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Edad] [int] NOT NULL,
	[Peso] [int] NOT NULL,
	[Historia] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Personaje] PRIMARY KEY CLUSTERED 
(
	[IdPersonaje] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[PeliculaSerie] ON 

INSERT [dbo].[PeliculaSerie] ([IdPeli], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (1, N'https://static.wikia.nocookie.net/doblaje/images/8/86/Jessie_poster.jpg/revision/latest?cb=20220312175816&path-prefix=es', N'Jessie', CAST(N'2011-09-30' AS Date), 5)
INSERT [dbo].[PeliculaSerie] ([IdPeli], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (2, N'https://static.wikia.nocookie.net/descendientes-disney/images/5/59/Ff93e7eef80528532c530b2eb78c1412.jpg/revision/latest?cb=20190721074642&path-prefix=es', N'Descendientes', CAST(N'2015-08-01' AS Date), 4)
INSERT [dbo].[PeliculaSerie] ([IdPeli], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (3, N'https://static.wikia.nocookie.net/doblaje/images/0/0f/Austin_%26_Ally_poster.jpg/revision/latest?cb=20201217185036&path-prefix=es', N'Austin y Ally', CAST(N'2011-12-02' AS Date), 4.5)
INSERT [dbo].[PeliculaSerie] ([IdPeli], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (4, N'https://static.wikia.nocookie.net/doblaje/images/8/85/16-Wishes-2010.jpg/revision/latest?cb=20220227000851&path-prefix=es', N'16 deseos', CAST(N'2010-06-25' AS Date), 3.4)
INSERT [dbo].[PeliculaSerie] ([IdPeli], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (5, N'https://static.wikia.nocookie.net/doblaje/images/2/29/516byP67oML._AC_.jpg/revision/latest?cb=20220328181343&path-prefix=es', N'Hannah Montana', CAST(N'2006-03-24' AS Date), 4.3)
INSERT [dbo].[PeliculaSerie] ([IdPeli], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (6, N'https://static.wikia.nocookie.net/doblaje/images/5/54/Buena_suerte_Charlie.jpg/revision/latest?cb=20200721010414&path-prefix=es', N'¡Buena suerte, Charlie!', CAST(N'2010-04-04' AS Date), 4.4)
INSERT [dbo].[PeliculaSerie] ([IdPeli], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (7, N'https://es.web.img3.acsta.net/pictures/14/06/17/10/57/284223.jpg', N'Liv y Maddie', CAST(N'2013-07-19' AS Date), 3.9)
INSERT [dbo].[PeliculaSerie] ([IdPeli], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (8, N'https://resizing.flixster.com/9rakSOd5rZ5jr-FRPfc7USbVZ8k=/206x305/v2/https://flxt.tmsimg.com/assets/p9047884_p_v8_ad.jpg', N'Radio Rebel', CAST(N'2012-02-17' AS Date), 2.7)
SET IDENTITY_INSERT [dbo].[PeliculaSerie] OFF
GO
SET IDENTITY_INSERT [dbo].[PeliPersonaje] ON 

INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (1, 1, 1)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (1, 10, 2)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (2, 2, 3)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (2, 10, 4)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (2, 11, 5)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (3, 8, 6)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (3, 9, 7)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (4, 1, 8)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (5, 5, 9)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (6, 4, 15)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (7, 2, 16)
INSERT [dbo].[PeliPersonaje] ([IdPeli], [IdPersonaje], [Id]) VALUES (8, 1, 17)
SET IDENTITY_INSERT [dbo].[PeliPersonaje] OFF
GO
SET IDENTITY_INSERT [dbo].[Personaje] ON 

INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (1, N'https://pbs.twimg.com/media/EejHQc1U8AAHgAq.jpg', N'Debby Ryan', 29, 60, N'Deborah Ann Ryan, conocida como Debby Ryan, es una actriz y cantante estadounidense.? Ryan comenzó a actuar en teatros profesionales a la edad de siete años; en 2007, apareció en la película de Barney & Friends titulada Barney: Let''s Go to the Firehouse donde Disney la reclutó.')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (2, N'https://static.wikia.nocookie.net/doblaje/images/a/a4/Dove_Cameron_2020.jpg/revision/latest?cb=20200331180441&path-prefix=es', N'Dove Cameron', 27, 60, N'Dove Olivia Cameron es una actriz, cantante y compositora estadounidense. Saltó a la fama por su doble papel del personaje homónimo en la serie de comedia de Disney Channel Liv and Maddie, por la que ganó el Premio Daytime Emmy a mejor intérprete en programación infantil.')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (4, N'https://m.media-amazon.com/images/S/pv-target-images/1c7d3266ebfb5be6a5896b034747bdae00cf3b2196b4db2960fbefb26798269f.jpg', N'Bridgit Mendler
', 30, 60, N'Bridgit Claire Mendler, más conocida como Bridgit Mendler, es una actriz, cantante y compositora estadounidense, conocida por interpretar a Teddy Duncan en la serie original de Disney Channel ¡Buena suerte, Charlie!.')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (5, N'https://images.mubicdn.net/images/cast_member/45165/cache-390511-1623410063/image-w856.jpg?size=800x', N'Miley Cyrus', 30, 60, N'Miley Ray Cyrus, cuyo nombre de nacimiento fue Destiny Hope Cyrus, es una celebridad cantante, compositora, dedicada a la actuación y producción discográfica estadounidense. Se destaca por su voz de tonalidad grave.??')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (8, N'https://static.wikia.nocookie.net/universo-reynandez/images/0/09/Ross_Lynch.jpg/revision/latest?cb=20221004200437&path-prefix=es', N'Ross Lynch', 27, 60, N'Ross Shor Lynch es un actor, cantante, compositor, músico y bailarín estadounidense. Lynch es uno de los miembros fundadores de la banda de pop rock R5 y The Driver Era. Es más conocido por su papel de Austin Moon en la exitosa serie juvenil de Disney Channel, Austin & Ally.? ')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (9, N'https://images.mubicdn.net/images/cast_member/281565/cache-556360-1592107867/image-w856.jpg?size=800x', N'Laura Marano', 27, 60, N'Laura Marie Marano (Los Ángeles, 29 de noviembre de 1995)1? es una actriz, cantante y compositora estadounidense, conocida por protagonizar la serie juvenil de Disney Channel, Austin & Ally, interpretando a Ally Dawson, por el cual la llevó a ganar premios en los Kids'' Choice Awards, y en los Teen Choice Awards como Actriz de TV Favorita durante los años que se emitió la serie.')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (10, N'https://live.staticflickr.com/1496/26060701092_15b86c9c8f_b.jpg', N'Cameron Boyce', 20, 60, N'Cameron Mica Boyce ? fue un actor estadounidense principalmente conocido por su papeles como Luke Ross en la serie original de Disney Channel Jessie, Conor en la serie original de Disney XD Gamer''s Guide to Pretty Much Everything, y Carlos de Vil en la saga de películas originales de Disney Channel Descendants. ')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (11, N'https://es.web.img2.acsta.net/pictures/19/10/17/23/28/5724036.jpg', N'Sofia Carson', 30, 60, N'Sofia Daccarett Char??, ?? más conocida como Sofia Carson, es una actriz, cantante, bailarina, y compositora estadounidense de origen Colombiano, Sirio y Libanés. Además sirve como embajadora de UNICEF y de la Fundación Cultural Latin Grammy.?? ')
SET IDENTITY_INSERT [dbo].[Personaje] OFF
GO
ALTER TABLE [dbo].[PeliPersonaje]  WITH CHECK ADD  CONSTRAINT [FK_PeliPersonaje_Pelicula o Serie] FOREIGN KEY([IdPeli])
REFERENCES [dbo].[PeliculaSerie] ([IdPeli])
GO
ALTER TABLE [dbo].[PeliPersonaje] CHECK CONSTRAINT [FK_PeliPersonaje_Pelicula o Serie]
GO
ALTER TABLE [dbo].[PeliPersonaje]  WITH CHECK ADD  CONSTRAINT [FK_PeliPersonaje_Personaje] FOREIGN KEY([IdPersonaje])
REFERENCES [dbo].[Personaje] ([IdPersonaje])
GO
ALTER TABLE [dbo].[PeliPersonaje] CHECK CONSTRAINT [FK_PeliPersonaje_Personaje]
GO
