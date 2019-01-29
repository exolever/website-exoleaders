import * as React from 'react';
import HighlightSection from '../HighlightSection';
import Form from './BaseForm';
import formBg from '../../img/bg.jpg';

interface Props {
  title: any;
  labels: any;
  fields: { groups: any };
  messages: any;
}

const LeaderForm: React.SFC<Props> = ({ title, labels, fields, messages }) => {
  return (
    <HighlightSection title={title} backgroundImage={formBg}>
      <Form
        labels={labels}
        messages={messages}
        enableName
        enableLocation
        enableLinkedIn
        enableGroups={[
          fields.groups.leaders,
          fields.groups.movement
        ]}
      />
    </HighlightSection>
  )
};

export default LeaderForm;
