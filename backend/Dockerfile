FROM python:3.7.5

RUN mkdir /site
WORKDIR /site

COPY ./requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

RUN pip install psycopg2-binary

WORKDIR /site
COPY ./admin/ ./site