[Demo](https://filethis.github.io/ft-connect-tabbed/components/ft-connect-tabbed/demo/)    [API](https://filethis.github.io/ft-connect-tabbed/components/ft-connect-tabbed/)    [Repo](https://github.com/filethis/ft-connect-tabbed)

### \<ft-connect-tabbed\>

An element that implements a FileThis user workflow as a set of tabbed panels. As the user progresses, they navigate to the next tab in the sequence.

This is one of several variants of our FileThis Connect drop-in elements. This one has fixed dimensions on a page. At the top of the element is a set of tabs that let the user switch between a panel for the available websites from which FileThis can fetch documents, a panel that lists all existing connections to sites, and a panel that displays thumbnails for documents that have been fetched.

Because the user is presented with these three tabs at the start, even when they do not yet have any connections, or fetched documents, there is a bit of learning to be done to understand how to proceed through a complete workflow. You might decide provide an explanation on the page that hosts this element, or just leave it to the user to figure out that there is a general progression from left to right. The component helps a bit in this regard by automatically switching to the connection tab after the user has selected a site and entered his credentials. The second tab then shows the newly-created connection and its spinning progress indicator. As the first documents are fetched, the component automatically switches to the third tab, "Documents", showing the thumbnails for the newly-fetched documents. Should the user want to create more connections, it's fairly obvious that clicking back on the "Sites" tab will allow them to go around again.

If you'd like to constain the workflow further, trading some flexibility for clear step-by-step user guidance, consider using our [ft-connect-wizard](https://github.com/filethis/ft-connect-wizard) variant.