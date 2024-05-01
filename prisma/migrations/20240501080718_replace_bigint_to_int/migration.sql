/*
  Warnings:

  - You are about to alter the column `cost` on the `Enterprise_Movie` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `value` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `Enterprise_Movie` MODIFY `cost` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Payment` MODIFY `value` INTEGER NOT NULL;
