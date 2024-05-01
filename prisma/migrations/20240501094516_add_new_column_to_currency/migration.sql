/*
  Warnings:

  - Added the required column `relation_to_dolar` to the `Currency` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Currency` ADD COLUMN `relation_to_dolar` DECIMAL(65, 30) NOT NULL;
