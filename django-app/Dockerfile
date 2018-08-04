FROM python:3.6

RUN apt-get update && pip install git+https://github.com/Supervisor/supervisor\
&& apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false -o APT::AutoRemove::SuggestsImportant=false $buildDeps

COPY logs ./
COPY daemons ./
COPY requirements.txt ./
COPY supervisord.conf /etc/supervisord.conf
COPY djangod.conf /etc/djangod.conf
RUN pip install -r requirements.txt