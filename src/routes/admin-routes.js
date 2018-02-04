import { Route, IndexRedirect } from 'react-router';
import React from 'react';
import AppController from 'components/admin/AppController';
import ArticleListController from 'components/admin/ArticleListController';
import ArticleController from 'components/admin/ArticleController';
import AuthorListController from 'components/admin/AuthorListController';
import AuthorController from 'components/admin/AuthorController';
import IssueListController from 'components/admin/IssueListController';
import MainIssueController from 'components/admin/MainIssueController';
import IssueArticleController from 'components/admin/IssueArticleController';
import IssueCategoryController from 'components/admin/IssueCategoryController';
import NotFound from 'components/admin/NotFound';
import Login from 'components/admin/Login';
import ImageController from 'components/admin/ImageController';
import ImagePreviewList from 'components/admin/ImagePreviewList';
import ImageArchive from 'components/admin/ImageArchive';
import Readme from 'components/admin/Readme';

export default (
  <Route path="/" component={AppController}>
    <Route path="login" component={Login} />
    <IndexRedirect to="articles/page/1" />
    <Route path="articles">
      <IndexRedirect to="page/1" />
      <Route path="page/:page" component={ArticleListController}>
        <Route path="slug/:slug" component={ArticleController} />
      </Route>
    </Route>
    <Route path="authors" component={AuthorListController}>
      <Route path=":slug" component={AuthorController} />
    </Route>
    <Route path="issues" component={IssueListController}>
      <Route path=":issueNumber">
        <IndexRedirect to="main" />
        <Route path="main" component={MainIssueController} />
        <Route path="articles" component={IssueArticleController} />
        <Route path="categories" component={IssueCategoryController} />
      </Route>
    </Route>
    <Route path="images" component={ImageController}>
      <Route path="upload" component={ImagePreviewList} />
      <Route path="archive" component={ImageArchive} />
    </Route>
    <Route path="readme" component={Readme} />

    <Route path="*" component={NotFound} />
  </Route>
);