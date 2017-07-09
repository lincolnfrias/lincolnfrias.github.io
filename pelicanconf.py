#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'lincolnfrias'
SITENAME = 'núpis'
SITEURL = ''
PATH = 'content'
TIMEZONE = 'America/Sao_Paulo'
DEFAULT_LANG = 'pt'
DEFAULT_PAGINATION = False
DELETE_OUTPUT_DIRECTORY = True

THEME = './theme/'

STATIC_PATHS = ['images', 'extra', 'notebooks', 'a']
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'}, 'extra/README.md': {'path': 'README.md'} }
PAGE_PATHS = ['pages']
PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'
INDEX_SAVE_AS = 'blog.html'
ARTICLE_PATHS = ['blog']

# When experimenting with different plugins (especially the ones that deal with metadata and content) caching may interfere and the changes may not be visible. In such cases disable caching with LOAD_CONTENT_CACHE = False or use the --ignore-cache command-line switch.
# usar submodulos?
# git submodule add git://github.com/danielfrg/pelican-ipynb.git plugins/ipynb
# MARKUP = ['md']
PLUGIN_PATHS = ['./plugins', './plugins/pelican-plugins']
PLUGINS = [
    # 'summary',       # auto-summarizing articles
    'ipynb.liquid',  # for embedding notebooks
    'liquid_tags.img',  # embedding images
    'liquid_tags.video',  # embedding videos
    'liquid_tags.include_code',  # including code blocks
    'liquid_tags.literal'
] # 'pelican_youtube', .. youtube:: VIDEO_ID

IGNORE_FILES = ['.ipynb_checkpoints']

# for liquid tags
CODE_DIR = 'code'
NOTEBOOK_DIR = 'notebooks'


# AUTHOR_SAVE_AS = False
# ARTICLE_URL = 'blog/{slug}.html'
# ARTICLE_SAVE_AS = 'blog/{slug}.html'
# CATEGORY_SAVE_AS = 'blog/category/{slug}.html'
# CATEGORY_URL = 'blog/category/{slug}.html'
# TAG_SAVE_AS = 'blog/tag/{slug}.html'
# TAG_URL = 'blog/tag/{slug}.html'
# DIRECT_TEMPLATES = (('index', 'blog/tags', 'blog/categories', 'blog/archives', 'blog/index'))
# PAGINATED_DIRECT_TEMPLATES = (('index', 'blog/index', ))




FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
