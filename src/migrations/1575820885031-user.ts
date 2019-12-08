import {MigrationInterface, QueryRunner} from "typeorm";

export class user1575820885031 implements MigrationInterface {
    name = 'user1575820885031'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `name` `phone` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `phone`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `phone` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `phone`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `phone` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `phone` `name` varchar(255) NOT NULL", undefined);
    }

}
