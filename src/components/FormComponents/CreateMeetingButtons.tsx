import React from 'react';
import { EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { useNavigate } from 'react-router-dom';

interface CreateMeetingButtonsProps {
  createMeeting: () => void;
  isEdit?: boolean;
  closeFlyout?: () => void;
}

export default function CreateMeetingButtons({ createMeeting, isEdit, closeFlyout }: CreateMeetingButtonsProps) {
  const navigate = useNavigate();

  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButton color="danger" fill onClick={() => (isEdit && closeFlyout ? closeFlyout() : navigate('/'))}>
          Cancel
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton fill onClick={createMeeting}>
          {isEdit ? 'Edit Meeting' : 'Create Meeting'}
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
