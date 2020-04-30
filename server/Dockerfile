FROM ruby:2.6.2

ENV LANG C.UTF-8
ENV RAILS_ENV=development

RUN apt-get update -qq && \
    apt-get install -y build-essential \
                       libpq-dev \
                       nodejs

RUN mkdir -p /app/server

WORKDIR /app/server

COPY Gemfile /app/server/Gemfile
COPY Gemfile.lock /app/server/Gemfile.lock
RUN bundle install -j4
COPY . /app/server