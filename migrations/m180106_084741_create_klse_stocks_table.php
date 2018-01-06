<?php

use yii\db\Migration;

/**
 * Handles the creation of table `klse_stocks`.
 */
class m180106_084741_create_klse_stocks_table extends Migration
{
   /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('klse_stocks', [
            'id' => $this->bigPrimaryKey()->unsigned(),
            'name' => $this->string(64),
            'code' => $this->string(10),
            'fullname' => $this->string(64),
            'market' => $this->string(64),
            'category' => $this->string(64),
            'created_at' => $this->dateTime(),
            'updated_at' => $this->dateTime(),
            'deleted_at' => $this->dateTime(),
            'key `name`  using hash (`name`)',
            'key `code`  using hash (`code`)',
            'key `fullname`  using hash (`fullname`)',
            'key `market`  using hash (`market`)',
            'key `category` using hash (`category`)',
        ], "engine = InnoDb, charset = utf8");
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable('klse_stocks');
    }

}
