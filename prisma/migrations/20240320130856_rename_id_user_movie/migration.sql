/*
  Warnings:

  - The primary key for the `User_Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_model_user` on the `User_Movie` table. All the data in the column will be lost.
  - Added the required column `id_user_movie` to the `User_Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User_Movie` DROP PRIMARY KEY,
    DROP COLUMN `id_model_user`,
    ADD COLUMN `id_user_movie` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_user_movie`);
