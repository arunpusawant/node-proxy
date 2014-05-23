node-proxy
==========

A simple reverse proxy using Nodejs

What does it do?
----------------

This proxy does two things:

1. Resolves the URL so that it only accesses the Select resource
2. Redirects to port 8983 (where Solr is running)

Why?
----

Because authentication is *very* challenging to get working with Nutch when using a self signed certificate.  This approach makes it so that only the Select resource can be accessed remotely from Sol.  In other words, random strangers can't delete your index.

What if I want to access another resource?
------------------------------------------

If for some reason you want to have multiple handlers for your Solr instance, (and there technically are multiple defined by default), then I would recommend using a white list approach, where only a few select resources are allowed, and anything else is forbidden.

How do I run this?
------------------

Run this by execting the script run_proxy.sh in the scripts directory.  The important part is that it runs as the nodejs user, and not as student, and ESPECIALLY not as root!

How do I test if this is running?
--------------------------------------

To see if the process is currently running execute the following on the server:

    pgrep -u nodejs -l

This will list all of the processes running as the nodejs user.  It should list the PID, as well as the name (node).  If nothing returns, then use the script to start up the process.  If that doesn't work, ask the TA for help.
