import Module from '@shared/decorators/Module';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';

@Module({
  providers: [{ provideAs: 'StorageProvider', useClass: DiskStorageProvider }],
})
export default class Providers {}
