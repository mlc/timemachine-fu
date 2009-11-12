timemachine-fu, a Timemachine Plugin for Rails
==============================================

[Tobis Timemachine](http://timemachine.6x.to/) is a very useful tool
for bringing websites back to "the amateur web of 1996."

However, there is one problem with the Timemachine: it requires your
users to have already installed it in order to be useful. What if you
want to make a 1996-era website for *all* your site's visitors?

Thus, `timemachine-fu`, the Timemachine plugin for Rails.


Installing
----------

Installation is easy. Just do

    ./script/plugin install git clone git://github.com/mlc/timemachine-fu.git

and, if they don't already, make sure that your layouts say

    <%= javascript_include_tag :defaults %>

`timemachine-fu` is compatible with either Prototype or JQuery. It
will automatically detect if you have the `jrails` plugin for using
JQuery installed and switch to the JQuery code if you have.


Credits
-------

The images and CSS which comprise the bulk of this plugin were
shamelessly stolen from [Tobis Timemachine](http://timemachine.6x.to/)
by [Tobias Leingruber](http://www.tobi-x.com).

The JavaScript was largely rewritten from scratch to rely on Prototype
or JQuery and to actually work, and the Ruby installation and
initalization code were written, by [mike castleman](http://vermicel.li).

`jingle.mid` was stolen from [Christmas Midi
Files](http://www.fortunecity.com/roswell/wells/6/XMAS1.HTM).


License
-------

I, for one, don't care.
