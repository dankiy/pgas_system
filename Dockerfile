FROM python:3.6

RUN apt-get update && pip install git+https://github.com/Supervisor/supervisor\
&& apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false -o APT::AutoRemove::SuggestsImportant=false $buildDeps

COPY ./django-app/requirements.txt ./requirements.txt

RUN pip install -r requirements.txt