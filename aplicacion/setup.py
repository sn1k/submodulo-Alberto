from setuptools import setup

setup(name='aplicacion',
	version='0.1',
	description='Web application about polls',
	url='https://github.com/sn1k/submodulo-Alberto',
	author='Alberto Romero Cañadas',
	author_email='albertoromeroca@gmail.com',
	license='GNU GPL',
	packages=['aplicacion'],
	install_requires=['django','wheel'],
	zip_safe=False)
