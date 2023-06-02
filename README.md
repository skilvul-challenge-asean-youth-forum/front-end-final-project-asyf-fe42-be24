# asyf-fe-42
# Asean Youth Forum (AYF) Front End

Dibuat dengan :

- Vite
- React Js
- Tailwind css
- React Context

# How To Use Git Properly ( Please Read This )

### If you new in this project Read the Initial Setup Section

# Contribution Guide

# Please DO NOT Direct PUSH to main or development branch

## Braching Guide

- if you do improve

  > `git checkout -b improve/apa-yang-di-lakukan`

- if you do create a new feature
  > `git checkout -b create/fitur-apa-yang-di-buat`
  
- if you do bug fixing
  > `git checkout -b fix-bug/bug-apa-yang-di-fix`
## Commit Message Guide

- if you do improve

  > `git commit -m "improve : apa yang di improve"`


- if you do create a new feature
  > `git commit -m "create-feature : fitur apa yang di buat"`

## Conflict Resolve Guide

1. Stash dulu kerjaan kamu supaya gak ilang

   > ` git stash`

2. Setelah itu kamu perlu pull perubahan dari branch development

   > `git pull origin development`

3. Setelah kamu berhasil melakukan pembaruan dari branch development selanjutnya kamu perlu mengembalikan pekerjaan mu sebelum nya yang ter stash

   > `git stash pop`

4. Lanjutkan Pekerjaan dengan Semestinya

5. Tapi jika ketika melakukan step kedua terjadi error conflitc atau karena kesalahan kamu, maka ikuti langkah yang bawah

## Conflict Resolve Guide V2

1. Pindah dulu ke Branch development

   > `git checkout development`

2. Kemudian pull perubahan terbaru dari branch development

   > `git pull`

3. Kemudian Pindah lagi ke branch dirimu

   > `git checkout <branch kamu>`

4. Selanjutnya kita perlu merge perubahan terbaru dari development

   > `git merge development`

## Recomendation Code Editor

Visual Studio Code

### Recomendation Extension

- Prettier
- Error Lens
- Tailwind intellense
- ES7 + React

## Initial Setup

- Clone Project ini ( Direkomendasikan menggunakan SSH )

  > `git clone git@github.com:skilvul-challenge-asean-youth-forum/front-end-final-project-asyf-fe42-be24.git`

- Pindah ke branch development

  > `git checkout development`

- Lalu mulai pekerjaanmu sebagai mestinya

## Run Development

- Project bisa dijalankan dengan menggunakan Live Server

## Demo App
- [Production Build]()

- [Development Build]()
