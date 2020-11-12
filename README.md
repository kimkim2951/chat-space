# README
<h1 align="center">chat-space</h1>

## アプリ概要
- 
## コンセプト
- 

## :globe_with_meridians: インストール方法
1.このリポジトリを複製<br>
`$ git clone https://github.com/kuriken0410/chat-space`

2.インストールしたリポジトリに移動<br>
`$ cd chat-space`

3.gemをアプリケーションに適用<br>
`$ bundle install`<br>

4.データベースの作成&反映<br>
`$ rails db:create`<br>
`$ rails db:migrate`<br>

5.アプリケーションの起動<br>
`$ rails s`<br>
:point_right:`http://localhost:3000`

## :page_facing_up: データベース設計
## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|unique: true|

### Association
- has_many :messages
- has_many :groups, through: groups_users
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groups_name|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :users, through: groups_users
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
