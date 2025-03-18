FROM php:8.1-fpm-buster

ARG user
ARG uid

RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libzip-dev \
    libicu-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libmagickwand-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd intl \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install bcmath pdo_mysql exif zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN useradd -u 1000 -ms /bin/bash -g www-data dvy

WORKDIR /var/www

COPY . /var/www
COPY --chown=dvy:www-data . /var/www

EXPOSE 9000

CMD ["php-fpm"]