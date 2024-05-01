/*
  Warnings:

  - Added the required column `id_payment` to the `User_Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User_Movie` ADD COLUMN `id_payment` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Method_Payment` (
    `id_method_payment` VARCHAR(191) NOT NULL,
    `method` VARCHAR(191) NOT NULL,
    `quantity_installments` INTEGER NOT NULL DEFAULT 1,
    `fees_per_installment` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    `quantity_installment_to_tax` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id_method_payment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Currency` (
    `id_currency` VARCHAR(191) NOT NULL,
    `currency` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_currency`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id_payment` VARCHAR(191) NOT NULL,
    `id_method_payment` VARCHAR(191) NOT NULL,
    `value` BIGINT NOT NULL,
    `id_currency` VARCHAR(191) NOT NULL,
    `conversion_value` BIGINT NOT NULL,
    `id_promo_code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_payment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promo_Code` (
    `id_promo_code` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `percentage` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id_promo_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Type_Document` (
    `id_type_document` VARCHAR(191) NOT NULL,
    `type_document` VARCHAR(191) NOT NULL,
    `format` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_type_document`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enterprise` (
    `id_enterprise` VARCHAR(191) NOT NULL,
    `document` VARCHAR(191) NOT NULL,
    `id_type_document` VARCHAR(191) NOT NULL,
    `contract_expires_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_enterprise`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enterprise_Movie` (
    `id_enterprise_movie` VARCHAR(191) NOT NULL,
    `id_enterprise` VARCHAR(191) NOT NULL,
    `id_movie` VARCHAR(191) NOT NULL,
    `cost` BIGINT NOT NULL,

    PRIMARY KEY (`id_enterprise_movie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_id_method_payment_fkey` FOREIGN KEY (`id_method_payment`) REFERENCES `Method_Payment`(`id_method_payment`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_id_currency_fkey` FOREIGN KEY (`id_currency`) REFERENCES `Currency`(`id_currency`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_id_promo_code_fkey` FOREIGN KEY (`id_promo_code`) REFERENCES `Promo_Code`(`id_promo_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Movie` ADD CONSTRAINT `User_Movie_id_payment_fkey` FOREIGN KEY (`id_payment`) REFERENCES `Payment`(`id_payment`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enterprise` ADD CONSTRAINT `Enterprise_id_type_document_fkey` FOREIGN KEY (`id_type_document`) REFERENCES `Type_Document`(`id_type_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enterprise_Movie` ADD CONSTRAINT `Enterprise_Movie_id_enterprise_fkey` FOREIGN KEY (`id_enterprise`) REFERENCES `Enterprise`(`id_enterprise`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enterprise_Movie` ADD CONSTRAINT `Enterprise_Movie_id_movie_fkey` FOREIGN KEY (`id_movie`) REFERENCES `Movie`(`id_movie`) ON DELETE RESTRICT ON UPDATE CASCADE;
