import { Migration } from '@mikro-orm/migrations';

export class Migration20230521000351 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" add column "created_at" timestamptz(0) not null;');
    this.addSql('alter table "post" alter column "updated_at" type timestamptz(0) using ("updated_at"::timestamptz(0));');
    this.addSql('alter table "post" alter column "title" type text using ("title"::text);');
    this.addSql('alter table "post" drop column "create_at";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "post" add column "create_at" varchar(255) not null;');
    this.addSql('alter table "post" alter column "updated_at" type varchar(255) using ("updated_at"::varchar(255));');
    this.addSql('alter table "post" alter column "title" type varchar(255) using ("title"::varchar(255));');
    this.addSql('alter table "post" drop column "created_at";');
  }

}
