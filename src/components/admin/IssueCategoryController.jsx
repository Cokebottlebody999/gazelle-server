import React from 'react';
import FalcorController from 'lib/falcor/FalcorController';
import _ from 'lodash';
import update from 'react-addons-update';
import LoadingOverlay from './LoadingOverlay';

// material-ui
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

// HOCs
import { withModals } from 'components/admin/hocs/modals/withModals';

const styles = {
  paper: {
    height: '100%',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left',
    display: 'inline-block',
  },
  innerPaper: {
    margin: 20,
  },
  tabs: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
  },
  buttons: {
    marginTop: 12,
    marginBottom: 24,
  },
};

class IssueCategoryController extends FalcorController {
  constructor(props) {
    super(props);
    this.safeSetState({
      changed: false,
      saving: false,
      categories: [],
    });

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  static getFalcorPathSets(params) {
    return [
      [
        'issues',
        'byNumber',
        params.issueNumber,
        'categories',
        { length: 20 },
        ['name', 'id'],
      ],
      ['issues', 'byNumber', params.issueNumber, 'name'],
    ];
  }

  componentWillMount() {
    const falcorCallBack = data => {
      const { issueNumber } = this.props.params;
      const { categories } = data.issues.byNumber[issueNumber];
      const categoriesArray = _.map(categories, category => category);

      this.safeSetState({
        categories: categoriesArray,
      });
    };
    super.componentWillMount(falcorCallBack);
  }

  componentWillReceiveProps(nextProps) {
    const falcorCallBack = data => {
      const { issueNumber } = this.props.params;
      const { categories } = data.issues.byNumber[issueNumber];
      const categoriesArray = _.map(categories, category => category);
      this.safeSetState({
        categories: categoriesArray,
      });
    };
    super.componentWillReceiveProps(nextProps, undefined, falcorCallBack);
    this.safeSetState({
      changed: false,
      saving: false,
    });
  }

  handleChanges(newCategories) {
    const { issueNumber } = this.props.params;
    const oldCategories = this.state.data.issues.byNumber[issueNumber]
      .categories;
    const changed = newCategories.some(
      (category, index) => category.id !== oldCategories[index].id,
    );
    if (changed !== this.state.changed) {
      this.safeSetState({ changed });
    }
  }

  handleOrderChange(index, event) {
    const newIndex = event.target.value - 1;
    const { categories } = this.state;
    const category = categories[index];
    const newCategories = update(categories, {
      $splice: [[index, 1], [newIndex, 0, category]],
    });
    this.handleChanges(newCategories);
    this.safeSetState({
      categories: newCategories,
    });
  }

  handleSave = async () => {
    const { issueNumber } = this.props.params;
    const oldCategories = this.state.data.issues.byNumber[issueNumber]
      .categories;
    const newCategories = this.state.categories;
    // Shallow validity check
    if (Object.keys(oldCategories).length !== newCategories.length) {
      await this.props.displayAlert(
        'There was an error, there has been added or removed a category' +
          ' mysteriously. Please contact developers',
      );
      return;
    }
    const idArray = newCategories.map(category => category.id);

    const callback = data => {
      const updatedCategories = _.map(
        data.issues.byNumber[issueNumber].categories,
        category => category,
      );
      this.safeSetState({
        changed: false,
        categories: updatedCategories,
      });
      setTimeout(() => {
        this.safeSetState({ saving: false });
      }, 1000);
    };
    this.safeSetState({ saving: true });
    this.falcorCall(
      ['issues', 'byNumber', issueNumber, 'updateIssueCategories'],
      [idArray],
      undefined,
      undefined,
      undefined,
      callback,
    );
  };

  render() {
    if (this.state.ready) {
      if (!this.state.data || !this.state.data.issues) {
        return (
          <div style={styles.tabs}>
            <Paper style={styles.paper} zDepth={1}>
              <div style={styles.innerPaper}>
                Incorrect issue number provided, this page was not found
              </div>
            </Paper>
          </div>
        );
      }
      const { categories } = this.state;
      if (!categories || categories.length === 0) {
        return (
          <div style={styles.tabs}>
            <Paper style={styles.paper} zDepth={1}>
              <div style={styles.innerPaper}>
                The issue has no categories as of now. Remember to first add all
                articles you want to be in the issue and then go here to order
                the categories.
              </div>
            </Paper>
          </div>
        );
      }

      let changedStateMessage;
      if (!this.state.changed) {
        if (!this.state.saving) {
          changedStateMessage = 'No Changes';
        } else {
          changedStateMessage = 'Saved';
        }
      } else if (!this.state.saving) {
        changedStateMessage = 'Save Changes';
      } else {
        changedStateMessage = 'Saving';
      }

      return (
        <div style={styles.tabs}>
          <Paper style={styles.paper} zDepth={1}>
            <div style={styles.innerPaper}>
              <p>
                Here you can reorder the categories. Remember that every time
                you change which articles are in the issue, for now the order of
                the categories will be randomized and you will have to come back
                here and reorder them.
                <br />
                <br />
                Also remember that this should be the last step before the issue
                is published and at this point all articles you want in the
                issue should be already added.
              </p>
            </div>
            {this.state.saving ? <LoadingOverlay /> : null}
          </Paper>
          <br />
          <h3>Categories</h3>
          <Divider />
          <br />
          <div>
            {categories.map((category, index) => (
              <div
                key={`${category.id.toString()}'-'${index.toString()}`}
                style={{ marginBottom: '8px' }}
              >
                {/* eslint-disable react/jsx-no-bind */}
                <select
                  onChange={this.handleOrderChange.bind(this, index)}
                  defaultValue={index + 1}
                  style={{ marginRight: '10px' }}
                  disabled={this.state.saving}
                >
                  {/* eslint-enable react/jsx-no-bind */}
                  {_.range(1, categories.length + 1).map(order => (
                    <option key={order} value={order}>
                      {order}
                    </option>
                  ))}
                </select>
                {category.name}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="pure-button pure-button-primary"
            onClick={this.handleSave}
            disabled={this.state.saving || !this.state.changed}
          >
            {changedStateMessage}
          </button>
        </div>
      );
    }
    return (
      <div className="circular-progress">
        <CircularProgress />
      </div>
    );
  }
}

const EnhancedIssueCategoryController = withModals(IssueCategoryController);
export { EnhancedIssueCategoryController as IssueCategoryController };
