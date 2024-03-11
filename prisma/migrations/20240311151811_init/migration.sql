-- CreateTable
CREATE TABLE `Genre` (
    `id_genre` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Genre_genre_key`(`genre`),
    PRIMARY KEY (`id_genre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Studio` (
    `id_studio` VARCHAR(191) NOT NULL,
    `studio` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Studio_studio_key`(`studio`),
    PRIMARY KEY (`id_studio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movie` (
    `id_movie` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `id_studio` VARCHAR(191) NOT NULL,
    `audience_score` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `id_genre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_movie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_id_studio_fkey` FOREIGN KEY (`id_studio`) REFERENCES `Studio`(`id_studio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_id_genre_fkey` FOREIGN KEY (`id_genre`) REFERENCES `Genre`(`id_genre`) ON DELETE RESTRICT ON UPDATE CASCADE;
