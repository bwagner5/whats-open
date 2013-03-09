#What's Open#

Simple Django site displaying which dining locations are currently open on 
George Mason University's campus.

##Contributing##

What's Open is still in it's very early stages and needs all the help it can
get. Even if you don't feel like you can be helpful with the heavily technical
aspects, we definitely need designers and technical writers.

There are many things that can be done with this project (see the "To Do" 
section), but sometimes it's the small things that count, so don't be afraid of 
contributing just for a spelling mistake.

If you need help at all please contact me (Tyler). I want people to
contribute, so if you are struggling, or just want to learn, then I am willing
to help.

###Set Up###

To get started, you'll need the following installed:
* [Python 2.7](http://www.python.org/download/)
* [Django 1.4 or later](https://www.djangoproject.com/download/)
* [Git](http://git-scm.com/book/en/Getting-Started-Installing-Git)
* [virtualenv](http://www.virtualenv.org/en/latest/index.html#installation) 
  (to install you will need either 
  [pip](http://www.pip-installer.org/en/latest/installing.html)

<!--This section is redundant as git.gmu.edu is no longer operational -->
<!--You don't need to do anything with [git.gmu.edu](https://git.gmu.edu/) to -->
<!--preform a `git clone`, but you should log in if you plan on actually modifying -->
<!--code. Logging into git.gmu.edu with your George Mason credentials will create -->
<!--an account. Ask a SRCT member to add you to the SRCT group on the site and you -->
<!--will be added to the list of people allowed to `git push` to the repository at -->
<!--git.gmu.edu. -->

Then type the following commands in your terminal (if you're on Windows, 
[Cygwin](http://www.cygwin.com/) is recommended).

```bash
git clone https://github.com/thallada/whats-open.git
cd whats-open/
virtualenv venv --distribute
source venv/bin/activate
pip install -r requirements.txt
python manage.py syncdb
python manage.py migrate website
```

<!--This section is redundant as git.gmu.edu is no longer operational -->
<!--If git.gmu.edu is not loading correctly the alternative url is: -->
<!--https://github.com/thallada/whats-open.git-->
Note, I will have to add you as a collaborator to the github repo for you to be 
able to push code. Please email me, Facebook message, or Humbug message me so I 
can add you.

###Running the Site Locally###

Now that everything is set-up you can run the server on your computer.

```bash
python manage.py runserver
```

Go to http://127.0.0.1:8000/ in your browser and you should see the website. 
Though, there won't be any restaurants showing. You will need to add them to 
the database. Go to http://127.0.0.1:8000/admin/ to add new Restaurant and Schedule 
objects to your database (the login would be the same username and password you 
entered when creating a superuser during the `python manage.py syncdb` command).

###Modifying and Deploying Code###

With the means of testing the website, you can really start contributing.

If you're new to Django and don't know where to start, I highly recommend
giving the [tutorial](https://docs.djangoproject.com/en/dev/intro/tutorial01/)
a try. However, it leaves out a lot of important things, so remember, Google is
your friend. If you can't figure it out there, ask me.

For the JavaScript, I will be using jQuery whenever possible because I prefer
it to straight up JavaScript. jQuery has [great
documentation](http://docs.jquery.com/) and I've found [Mozilla's documentation
on JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript) to be
useful as well. But if you're Google-fu is sharp, that should suffice.

<!--This section is incorrect as git.gmu.edu is no longer operational -->
<!--If you followed the steps in "Set Up" above, once you actually make changes it-->
<!--should be easy to push them to the git repository.-->

Once you actually make your changes and have fully tested them you can push the 
code to the git repository. Note, I will have to add you to my github repo in 
order for you to be allowed to push code to the repo. Please email, Facebook 
message, Humbug message me so I can add you.

There are many ways to use git, and this is one example:

```
git commit -a
git push origin master
```
Some more helpful links on how to use Git:
* [Git Reference](http://gitref.org/)
* [OpenHatch's Training Mission](https://openhatch.org/missions/git)
* [Visual Git
  Reference](http://marklodato.github.com/visual-git-guide/index-en.html)
* [Git For Ages 4 And
  Up](http://blip.tv/open-source-developers-conference/git-for-ages-4-and-up-4460524)

We currently don't have What's Open running on a dedicated server yet, but when
we do I will have instructions on how to deploy the code here.

<!--No longer relevant as there is no postgres database set up at the moment-->
<!--###Running Site Locally with Production Database###-->
<!--It is possible to run the site locally using the PostgresSQL database that-->
<!--whatsopen.gmu.edu uses. The way settings.py is configured requires that you set-->
<!--an environmental variable to the database's url before you run the site. Talk -->
<!--to me if you would like to know the url to accomplish this.-->
###To Do###
* Get all restaurants displaying correct open times on the page. AKA. make
  extensive tests.
* Add a Typeahead search box at the top to quickly filter out restaurants.
* Sort by location view
* Get a decent UI
* Get a usable admin interface UI, currently it is very confusing to add a 
  restaurant and schedule.
* Add times until opening/closing for restaurants that are close, and exact
  times for those that aren't.
* Add yellow close-to-closing condition.
* Possible: Make page refresh, or more preferably have the data refresh. For
  example, with AJAX calls.
* Possible: Make an API?
