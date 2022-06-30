import React from 'react';
import { FlatList } from 'react-native';

import { Match } from '../Match';
import { TEAMS } from '../../utils/teams';

import { Container, Title } from './styles';
import { Search } from '../Search';

export function Matches() {

  function handleAccessibilityAction(actionName: string) {
    
  }

  return (
    <Container>
      <Title>Próximas partidas</Title>

      <Search />

      <FlatList
        data={TEAMS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Match
            data={item}
            accessibilityActions={[
              { name: 'activate', label: 'Ver detalhes do jogo.' },
              { name: 'longpress', label: 'Atualizar o placar do jogo.'}
            ]}
            onAccessibilityAction={e => e.nativeEvent.actionName}
          />
        )}
      />
    </Container>
  );
}