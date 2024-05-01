/*
  Warnings:

  - You are about to alter the column `conversion_value` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `Payment` MODIFY `conversion_value` INTEGER NOT NULL;
